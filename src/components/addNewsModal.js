import React from "react";
import "../style/modal.css";

export default function AddNewsModal({ setModal, modal }) {
    const dn = modal ? "block" : "none";
    return (
        <div className="modal" style={{ display: dn }} onClick={setModal}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2 className="modal-header">Add News</h2>
                </div>
                <div className="input-section">
                    <div className="inputs">
                        <label for="title">Title</label>
                        <input
                            id="title"
                            className="modalInput"
                            type="text"
                            placeholder="Insert Title"
                        />
                    </div>
                    <div className="inputs">
                        <label for="subTitle">News Tag</label>
                        <input
                            id="subTitle"
                            className="modalInput"
                            type="text"
                            placeholder="Insert News Tag"
                        />
                    </div>
                    <div className="inputs">
                        <label for="subTitle">Upload image</label>
                        <input
                            id="subTitle"
                            className="modalFileInput"
                            type="file"
                        />
                    </div>
                    <div className="inputs">
                        <label for="text-area">News Body</label>
                        <textarea
                            id="text-area"
                            className="modalInput outline:none"
                            type="text"
                            placeholder="Insert News Body"
                        />
                    </div>
                </div>
                <div className="modal-btn-section">
                    <button className="modal-btn close" onClick={setModal}>
                        Close
                    </button>
                    <button className="modal-btn add">Add News</button>
                </div>
            </div>
        </div>
    );
}
