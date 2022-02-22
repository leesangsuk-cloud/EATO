import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import ChatRoom2 from "./pages/ChatRoom2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/chatting" element={<ChatRoom2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


