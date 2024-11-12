import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddDrop from "../components/AddDrop/AddDrop";
import StudentInfo from "../components/StudentInfo";
import WhatIf from "../components/WhatIf/WhatIf";

const Student = () => {
  let pages = ["Home", "Add/Drop", "What-If"];

  return (
    <>
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar
          pages={pages}
          user={sessionStorage.getItem("username") as string}
        />

        {/* Main Content */}
        <div
          style={{
            marginLeft: "250px",
            padding: "20px",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="Home" element={<StudentInfo />} />
            <Route path="AddDrop" element={<AddDrop />} />
            <Route path="WhatIf" element={<WhatIf />} />
            <Route path="*" element={<Navigate to={"Home"} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Student;
