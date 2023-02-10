import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import AddNewsModal from "../components/addNewsModal";
import AddProjectModal from "../components/addProjectModal";
import Aside from "../components/aside";
import Navbar from "../components/navbar";

export default function AdminLayout() {
    const [tasks, setTasks] = useState([]);
    const [doneTaksNumber, setDoneTaksNumber] = useState(0);
    const [edintingTaskId, setEdintingTaskId] = useState(0);
    const [edintingTaskIsDone, setEdintingTaskIsDone] = useState();
    const [projectModal, setprojectModal] = useState(false);
    const [newsModal, setNewsModal] = useState(false);
    const inIt = {};
    const [taskObj, setTaskObj] = useState(inIt);

    const handleNewsModal = () => {
        setNewsModal(!newsModal);
    };

    const handleProjectModal = () => {
        setprojectModal(!projectModal);
    };

    function addTask() {}

    return (
        <div id="adminLayout">
            <Aside />
            <div id="main">
                <AddNewsModal
                    modal={newsModal}
                    setModal={handleNewsModal}
                    taskObj={taskObj}
                    setTaskObj={setTaskObj}
                    addTask={addTask}
                />
                <AddProjectModal
                    modal={projectModal}
                    setModal={handleProjectModal}
                    taskObj={taskObj}
                    setTaskObj={setTaskObj}
                    addTask={addTask}
                />
                <Navbar
                    setNewsModal={handleNewsModal}
                    setprojectModal={handleProjectModal}
                />
                <Outlet />
            </div>
        </div>
    );
}
