// interface Person {
//   firstName: string;
//   lastName: string;
// }
// // 继承实现
// interface PersonWithBirthDate extends Person {
//   birth: Date;
// }

// // 联合接口类型
// // 方式一
// let p1: PersonWithBirthDate = {
//   firstName: 'alan',
//   lastName: 'hello',
//   birth: new Date('2022/10/12'),
// }
// // 方式二
// type PersonWithBirthDate2 = Person & { birth: Date };
// let p2: PersonWithBirthDate2 = {
//   firstName: 'alan',
//   lastName: 'hello',
//   birth: new Date('2022/10/12'),
// }

const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA",
};

interface Options1 {
  width: number;
  height: number;
  color: string;
  label: string;
}

type Options2 = typeof INIT_OPTIONS;

let options1: Options1 = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA",
}
let options2: Options2 = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA",
}

// get请求
// function get(url: string, opts: Options1): Promise<Response>
// function get() {
//   return new Promise((resolve, rejdct)=> {
//     resolve(true);
//   })
// }

// // post请求
// function post(url: string, opts: Options1): Promise<Response>
// function post() {
//   return new Promise((resolve, rejdct)=> {
//     resolve(true);
//   })
// }

interface IResponse extends Pick<Response, 'url' | 'status'> {
  
}

type HTTPFunction = (url: string, opts: Options1) => Promise<IResponse>;
const get: HTTPFunction = (url, opts) => {
  return new Promise((resolve, reject) => {
    resolve({
      url: "http://baidu.com/api/v1",
      status: 200,
    });
  });
};
const post: HTTPFunction = (url, opts) => {
  return new Promise((resolve, reject) => {
    resolve({
      url: "http://baidu.com/api/v1",
      status: 200,
    });
  });
};

interface Album {
  artist: string; // 艺术家
  title: string; // 专辑标题
  releaseDate: Date; // 发行日期：YYYY-MM-DD
  recordingType: 'studio' | 'live'; // 录制类型："live" 或 "studio"
}

const dangerous: Album = {
  artist: "Michael Jackson",
  title: "Dangerous",
  releaseDate: new Date('2022-11-12'), // 与预期格式不匹配
  recordingType: "studio", // 与预期格式不匹配
};


interface State {
  pageContent: string;
  isLoading: boolean;
  errorMsg?: string;
}

// function renderPage(state: State) {
//   if (state.errorMsg) {
//     return `呜呜呜，加载页面出现异常了...${state.errorMsg}`;
//   } else if (state.isLoading) {
//     return `页面加载中~~~`;
//   }
//   return `<div>${state.pageContent}</div>`;
// }

// // 输出结果：页面加载中~~~
// console.log(renderPage({isLoading: true, pageContent: ""}));
// // 输出结果：<div>大家好</div>
// console.log(renderPage({isLoading: false, pageContent: "大家好呀"}));

// async function changePage(state: State, newPage: string) {
//   state.isLoading = true;
//   try {
//     const response = await fetch(getUrlForPage(newPage));
//     if (!response.ok) {
//       throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
//     }
//     const text = await response.text();
//     state.isLoading = false;
//     state.pageContent = text;
//   } catch (e) {
//     state.isLoading = false;
//     state.errorMsg = "" + e;
//   }
// }

// interface RequestPending {
//   state: "pending";
// }

// interface RequestError {
//   state: "error";
//   errorMsg: string;
// }

// interface RequestSuccess {
//   state: "ok";
//   pageContent: string;
// }

// type RequestState = RequestPending | RequestError | RequestSuccess;

// interface State {
//   currentPage: string;
//   requests: { [page: string]: RequestState };
// }

// function renderPage(state: State) {
//   const { currentPage } = state;
//   const requestState = state.requests[currentPage];
//   switch (requestState.state) {
//     case "pending":
//       return `页面加载中~~~`;
//     case "error":
//       return `呜呜呜，加载第${currentPage}页出现异常了...${requestState.errorMsg}`;
//     case "ok":
//       `<div>第${currentPage}页的内容：${requestState.pageContent}</div>`;
//   }
// }

// async function changePage(state: State, newPage: string) {
//   state.requests[newPage] = { state: "pending" };
//   state.currentPage = newPage;
//   try {
//     const response = await fetch(getUrlForPage(newPage));
//     if (!response.ok) {
//       throw new Error(`无法正常加载页面 ${newPage}: ${response.statusText}`);
//     }
//     const pageContent = await response.text();
//     state.requests[newPage] = { state: "ok", pageContent };
//   } catch (e) {
//     state.requests[newPage] = { state: "error", errorMsg: "" + e };
//   }
// }