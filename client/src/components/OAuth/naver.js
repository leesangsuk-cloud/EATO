const NAVER_STATE = "Welcome,2022";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}/naver&state=${NAVER_STATE}`;
