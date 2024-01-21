import BookModel from "../../model/Book";
import NoteModel from "../../model/Note";
import ReadingTime from "./readingTime";
import RecordLocation from "./recordLocation";
import RecordRecent from "./recordRecent";
declare var window: any;
const getBookName = (books: BookModel[]) => {
  return books.map((item) => item.name);
};
const getAuthorName = (books: BookModel[]) => {
  return window._.sortBy(
    books.map((item) => {
      return { key: item.key, author: item.author };
    }),
    "author"
  ).map((item) => item.key);
};
const getBookKey = (books: BookModel[]) => {
  return books.map((item) => item.key);
};
const getBookIndex = (nameArr: string[], oldNameArr: string[]) => {
  let indexArr: number[] = [];
  for (let i = 0; i < nameArr.length; i++) {
    //如果索引数组已经包含该索引，就把它放在随后一位，取数组长度为索引
    oldNameArr.indexOf(nameArr[i]) > -1 &&
      indexArr.push(oldNameArr.indexOf(nameArr[i]));
  }
  if (indexArr.length < oldNameArr.length) {
    oldNameArr.forEach((item) => {
      if (nameArr.indexOf(item) === -1) {
        for (let index = 0; index < oldNameArr.length; index++) {
          if (indexArr.indexOf(index) === -1) {
            indexArr.push(index);
            break;
          }
        }
      }
    });
  }
  return [
    ...new Set(
      indexArr.map((item) => {
        return item - Math.min(...indexArr);
      })
    ),
  ];
};
const getDurationArr = () => {
  let durationObj = ReadingTime.getAllTime();
  var sortable: any[] = [];
  for (let obj in durationObj) {
    sortable.push([obj, durationObj[obj]]);
  }
  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  return Object.keys(durationObj);
};
const getPercentageArr = () => {
  let locationObj = RecordLocation.getAllCfi();
  var sortable: any = [];
  for (let obj in locationObj) {
    sortable.push([obj, locationObj[obj].percentage || 0]);
  }
  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  return sortable.map((item) => item[0]);
};
class SortUtil {
  static sortBooks(
    books: BookModel[],
    bookSortCode: { sort: number; order: number }
  ) {
    let oldRecentArr = books.map((item) => item.key);
    let recentArr = RecordRecent.getAllRecent();
    if (bookSortCode.sort === 1 || bookSortCode.sort === 0) {
      if (bookSortCode.order === 1) {
        return getBookIndex(recentArr, oldRecentArr).reverse();
      } else {
        return getBookIndex(recentArr, oldRecentArr);
      }
    }
    if (bookSortCode.sort === 2) {
      let oldNameArr = getBookName(books);
      let nameArr = getBookName(books).sort();
      if (bookSortCode.order === 1) {
        return getBookIndex(nameArr, oldNameArr).reverse();
      } else {
        return getBookIndex(nameArr, oldNameArr);
      }
    }
    if (bookSortCode.sort === 3) {
      let nameArr: number[] = [];
      for (let i = 0; i < books.length; i++) {
        nameArr.push(i);
      }
      if (bookSortCode.order === 1) {
        return nameArr.reverse();
      } else {
        return nameArr;
      }
    }
    if (bookSortCode.sort === 4) {
      let durationKeys = getDurationArr();

      let bookKeys = getBookKey(books);
      if (bookSortCode.order === 1) {
        return getBookIndex(
          window._.union(durationKeys, bookKeys),
          bookKeys
        ).reverse();
      } else {
        return getBookIndex(window._.union(durationKeys, bookKeys), bookKeys);
      }
    }
    if (bookSortCode.sort === 5) {
      let oldAuthorArr = getBookKey(books);
      let authorArr = getAuthorName(books);
      if (bookSortCode.order === 1) {
        return getBookIndex(authorArr, oldAuthorArr).reverse();
      } else {
        return getBookIndex(authorArr, oldAuthorArr);
      }
    }
    if (bookSortCode.sort === 6) {
      let percentagenKeys = getPercentageArr();
      let bookKeys = getBookKey(books);
      if (bookSortCode.order === 1) {
        return getBookIndex(percentagenKeys, bookKeys).reverse();
      } else {
        return getBookIndex(percentagenKeys, bookKeys);
      }
    }
  }
  static sortNotes(
    notes: NoteModel[],
    noteSortCode: { sort: number; order: number },
    books: BookModel[] = []
  ) {
    if (noteSortCode.sort === 2) {
      //使书摘从晚到早排序
      let noteArr = window._.clone(notes).reverse();
      let dateArr = window._.uniq(
        notes.map(
          (item) =>
            "" + item.date.year + "-" + item.date.month + "-" + item.date.day
        )
      );
      if (noteSortCode.order === 1) {
        dateArr.sort();
      } else {
        dateArr.sort().reverse();
      }
      //得到以日期为键，书摘为值的对象
      let noteObj: { [key: string]: any } = {};
      dateArr.forEach((date) => {
        noteObj[date] = [];
      });
      noteArr.forEach((note) => {
        dateArr.forEach((date) => {
          if (
            date ===
            "" + note.date.year + "-" + note.date.month + "-" + note.date.day
          ) {
            noteObj[date].push(note);
          }
        });
      });
      return noteObj || {};
    }
    if (noteSortCode.sort === 1) {
      //使书摘从晚到早排序
      let noteArr = window._.clone(notes).reverse();
      let nameArr = window._.uniq(
        notes.map(
          (item) =>
            books[
              window._.findLastIndex(books, {
                key: item.bookKey,
              })
            ].name
        )
      );
      if (noteSortCode.order === 1) {
        nameArr.sort();
      } else {
        nameArr.sort().reverse();
      }
      //得到以日期为键，书摘为值的对象
      let noteObj: { [key: string]: any } = {};
      nameArr.forEach((name) => {
        noteObj[name] = [];
      });
      noteArr.forEach((note) => {
        nameArr.forEach((name) => {
          if (
            name ===
            books[
              window._.findLastIndex(books, {
                key: note.bookKey,
              })
            ].name
          ) {
            noteObj[name].push(note);
          }
        });
      });
      return noteObj || {};
    }
  }
  static setBookSortCode(sortCode: number, orderCode: number) {
    let json =
      localStorage.getItem("bookSortCode") ||
      JSON.stringify({ sort: 1, order: 2 });
    let obj = json ? JSON.parse(json) : { sort: 1, order: 2 };
    obj.sort = sortCode;
    obj.order = orderCode;
    localStorage.setItem("bookSortCode", JSON.stringify(obj));
  }

  static getBookSortCode() {
    let json =
      localStorage.getItem("bookSortCode") ||
      JSON.stringify({ sort: 1, order: 2 });
    let obj = JSON.parse(json) || { sort: 1, order: 2 };
    return obj || null;
  }
  static setNoteSortCode(sort: number, order: number) {
    let json =
      localStorage.getItem("noteSortCode") ||
      JSON.stringify({ sort: 2, order: 2 });
    let obj = json ? JSON.parse(json) : { sort: 2, order: 2 };
    obj.sort = sort;
    obj.order = order;
    localStorage.setItem("noteSortCode", JSON.stringify(obj));
  }

  static getNoteSortCode() {
    let json =
      localStorage.getItem("noteSortCode") ||
      JSON.stringify({ sort: 2, order: 2 });
    let obj = JSON.parse(json) || { sort: 2, order: 2 };
    return obj || null;
  }
}

export default SortUtil;
