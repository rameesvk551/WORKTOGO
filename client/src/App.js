import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WriterPage from "./pages/WriterPage";
import BlogDetails from "./pages/BlogDetails";
import CategoriesPage from "./pages/CategoriesPage";
import Loading from "./components/Loading";

  function Layout() {
    return(
    <div className="w-full flex flex-col max-h-screen  px-4 md:px-10 2xl:px-29=8">
     {/* <Navbar/>*/}
     <div className="flex-1"> <Outlet/></div>
     {/* <Footer/>*/}
    </div>)
  }
function App() {
  const isLoading=false
  const theme='dark'
  return (
   <main className={theme}>
    <div className="w-full min-h-screen relative bg-white dark:bg-[#020b19]">

      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<CategoriesPage/>}/>
        
        <Route path="/:slug/:id?" element={<BlogDetails/>}/>
        <Route path="/writer/:id?" element={<WriterPage/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>

      </Routes>
      {isLoading && <Loading/>}
    </div>
   </main>
  
  );
}

export default App;