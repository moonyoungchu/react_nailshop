import client from "./client";

export const adminSetup = (userId, userName, userPw) => client.post("/users/setup", { userId, userName, userPw });

export const signIn = (userId, password) => client.post(`/api/authenticate?username=${userId}&password=${password}`);

export const getMyInfo = () => client.get("/users/myinfo");

export const fetchCodeGroup = (groupCode) => client.get(`/codegroups/${groupCode}`);
export const fetchCodeGroupList = () => client.get("/codegroups");
export const modifyCodeGroup = (groupCode, groupName) => client.put(`/codegroups/${groupCode}`, { groupName });
export const writeCodeGroup = (groupCode, groupName) => client.post("/codegroups", { groupCode, groupName });
export const removeCodeGroup = (groupCode) => client.delete(`/codegroups/${groupCode}`);

export const fetchCodeDetail = ({ groupCode, codeValue }) => client.get(`/codedetails/${groupCode}/${codeValue}`);
export const fetchCodeDetailList = () => client.get("/codedetails");
export const modifyCodeDetail = (groupCode, codeValue, codeName) => client.put(`/codedetails/${groupCode}/${codeValue}`, { codeValue, codeName });
export const writeCodeDetail = (groupCode, codeValue, codeName) => client.post("/codedetails", { groupCode, codeValue, codeName });
export const removeCodeDetail = (groupCode, codeValue) => client.delete(`/codedetails/${groupCode}/${codeValue}`);

export const fetchGroupCodeList = () => client.get("/codes/codeGroup");

export const signUp = (userId, userName, userPw, job) => client.post("/users", { userId, userName, userPw, job });

export const fetchJobCodeList = () => client.get("/codes/job");

export const fetchMember = (userNo) => client.get(`/users/${userNo}`);
export const fetchMemberList = () => client.get("/users");
export const modifyMember = (userNo, payload) => client.put(`/users/${userNo}`, payload);
export const writeMember = (userId, userName, userPw, job) => client.post("/users", { userId, userName, userPw, job });
export const removeMember = (userNo) => client.delete(`/users/${userNo}`);

export const fetchBoard = (boardNo) => client.get(`/boards/${boardNo}`);
export const fetchBoardList = () => client.get("/boards");
export const modifyBoard = (boardNo, title, content) => client.put(`/boards/${boardNo}`, { title, content });
export const writeBoard = (title, content) => client.post("/boards", { title, content });
export const removeBoard = (boardNo) => client.delete(`/boards/${boardNo}`);

export const fetchNotice = (noticeNo) => client.get(`/notices/${noticeNo}`);
export const fetchNoticeList = () => client.get("/notices");
export const modifyNotice = (noticeNo, title, content) => client.put(`/notices/${noticeNo}`, { title, content });
export const writeNotice = (title, content) => client.post("/notices", { title, content });
export const removeNotice = (noticeNo) => client.delete(`/notices/${noticeNo}`);

export const fetchItem = (itemId) => client.get(`/items/${itemId}`);
export const fetchItemList = () => client.get("/items");
export const modifyItem = (itemId, formData) => client.put(`/items/${itemId}`, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export const writeItem = (formData) => client.post("/items", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export const removeItem = (itemId) => client.delete(`/items/${itemId}`);

export const fetchChargeCoinList = () => client.get("/coins");
export const chargeCoin = (amount) => client.post(`/coins/charge/${amount}`, { amount });

export const fetchPayCoinList = () => client.get("/coins/pay");

export const buyItem = (itemId) => client.get(`/items/buy/${itemId}`);

export const fetchUserItem = (userItemNo) => client.get(`/useritems/${userItemNo}`);
export const fetchUserItemList = () => client.get("/useritems");

export const downloadUserItem = (userItemNo) => client.get(`/useritems/download/${userItemNo}`, {
  responseType: 'blob'
});

export const fetchPds = (itemId) => client.get(`/pds/${itemId}`);
export const fetchPdsList = () => client.get("/pds");
export const modifyPds = (itemId, itemObject) => client.put(`/pds/${itemId}`, itemObject);
export const writePds = (itemObject) => client.post("/pds", itemObject);
export const removePds = (itemId) => client.delete(`/pds/${itemId}`);

export const addAttach = (formData) => client.post('/pds/upload', formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  },
});

export const fetchAttachList = (itemId) => client.get(`/pds/attach/${itemId}`);
