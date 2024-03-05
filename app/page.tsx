/* page.tsx가 없다면 폴더 경로는 그저 경로의 일부분 */
/* 페이지에 원하는 화면을 띄우기 위해서는 page.tsx or page.jsx가 존재해야함.    */

import Navigation from "../components/navigation";

export default function Home(){
    return (
    <div>
        <Navigation />
            <h1>Hello</h1>
    </div>
    )
}
