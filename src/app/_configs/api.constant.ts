// export const BASE_URL = `https://api.latteragnarok.com`;
export const BASE_URL = `http://139.59.216.187:8000`;
export const PREFIX = `api`;
export const DOWNLOAD = `download`;
export const ACCOUNT = `account`;
export const ARTICLE = `article`;

export const API = {
  API_ACCOUNT: {
    API_ACCOUNT_REGISTER: `${BASE_URL}/${PREFIX}/${ACCOUNT}/register`,
    API_ACCOUNT_LOGIN: `${BASE_URL}/${PREFIX}/${ACCOUNT}/login`,
    API_ACCOUNT_RESETPW: `${BASE_URL}/${PREFIX}/${ACCOUNT}/resetpw`,
    API_ACCOUNT_INFORMATION: `${BASE_URL}/${PREFIX}/${ACCOUNT}/information`,
  },
  API_GAME: {
    API_DOWNLOAD_LINK_FULL: `${BASE_URL}/${PREFIX}/${DOWNLOAD}/link-full`,
    API_DOWNLOAD_LINK_PATCHER: `${BASE_URL}/${PREFIX}/${DOWNLOAD}/link-patch`,
    API_GET_SERVER_INFORMATION: `${BASE_URL}/${PREFIX}/server-information`
  },
  API_ARTICLE: {
    API_ARTICLE: `${BASE_URL}/${PREFIX}/${ARTICLE}`,
    API_GET_ARTICLE_BY_ID: `${BASE_URL}/${PREFIX}/${ARTICLE}/__articleId`,
    API_GET_ARTICLE_BY_SLUG: `${BASE_URL}/${PREFIX}/${ARTICLE}/__articleSlug`,
  }
};
