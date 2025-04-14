import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    // 모든 요청의 기본 URL을 설정
    baseURL: BASE_URL,
    headers: {
        // 이 요청의 본문(body)에 담긴 데이터 형식이 JSON이라는 걸 서버에 알려주는 것
        'Content-Type' : 'application/json'
    }
})

export default api;