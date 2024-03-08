import "./App.css";
import { Col, Row, Button, Tooltip, FloatButton, Modal } from "antd";
import {
    CompassOutlined,
    TransactionOutlined,
    CustomerServiceOutlined,
    AudioMutedOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useState } from "react";
import FormModal from "./components/FormModal";

function App() {
    const navigate = useNavigate();
    const soundUrl = "/music/mp3.mp3";
    const [play, { stop }] = useSound(soundUrl, { interrupt: true });
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            play();
        } else {
            setIsPlaying(false);
            stop();
        }
    };

    //
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {/* wrapper */}
            <div className="max-w-[73rem]  mx-auto overflow-hidden h-lvh">
                {/* Container */}
                <div className="p-4 w-full h-full">
                    <div className=" bg-[#8b4513] rounded h-full p-[0.15rem] relative">
                        <div className=" bg-white m-4 p-8 shadow-wrap rounded-md relative h-[96%]">
                            {/* <div className="w-full h-full z-50"> */}
                            <Row
                                justify="center"
                                align="middle"
                                className="flex items-center justify-center h-full"
                            >
                                <Col
                                    span={11}
                                    className="bg-[url('/bg.jpg')] bg-cover h-full border-[#000080] border relative flex justify-center"
                                >
                                    <div className="absolute left-1 top-1 z-50 flex flex-col gap-2">
                                        <Tooltip
                                            placement="right"
                                            title="Xem bản đồ"
                                            color="magenta"
                                        >
                                            <a href="https://maps.app.goo.gl/7j8o3QsmGDbsDemh6">
                                                <Button
                                                    icon={<CompassOutlined />}
                                                    shape="circle"
                                                    className="bg-white text-black animate-shake "
                                                    size="middle "
                                                />
                                            </a>
                                        </Tooltip>
                                        <Tooltip
                                            placement="right"
                                            title="Mừng cưới ❤"
                                            color="magenta"
                                        >
                                            <Button
                                                icon={<TransactionOutlined />}
                                                shape="circle"
                                                className="bg-white text-black animate-shake"
                                                size="middle "
                                                onClick={() =>
                                                    navigate("/Bank")
                                                }
                                            />
                                        </Tooltip>
                                    </div>
                                    <div className="z-0 absolute inset-0 opacity-25 bg-white"></div>
                                    <div className="flex justify-between flex-col pt-8 pb-1 ">
                                        <div className="flex flex-col">
                                            <span className="text-center font-weddingFont text-7xl text-red-600 font-medium z-50 font-base">
                                                Save The Date
                                            </span>
                                            <span className="text-center text-black text-base font-medium">
                                                05 - 08 -2024
                                            </span>
                                        </div>
                                        <div className="text-center text-red-600 font-semibold text-xl font-weddingFont z-20">
                                            Kính môøi .........................
                                        </div>
                                    </div>
                                    <img
                                        src="./right-top.png"
                                        alt="hoa"
                                        width="250px"
                                        className="absolute -top-6 -right-10 z-10"
                                    />
                                    <img
                                        src="./right-top.png"
                                        alt="hoa"
                                        width="250px"
                                        className="absolute -bottom-6 -left-10 z-10 rotate-180"
                                    />
                                </Col>
                                <Col
                                    span={2}
                                    className=" h-[100%] -mt-24 relative z-50"
                                >
                                    <div className="breakBook h-[113%] z-50"></div>
                                </Col>
                                <Col
                                    span={11}
                                    className="h-full border-[#000080] border relative flex justify-center"
                                >
                                    <div className="mt-12 ">
                                        <div className="flex justify-center flex-col items-center ">
                                            <p className="font-semibold font-poppins">
                                                TRÂN TRỌNG KÍNH MỜI
                                            </p>
                                            <p className="font-weddingFont text-red-700 text-2xl">
                                                Bạn và gia đình
                                            </p>
                                            <p>
                                                Tới dự lễ thành hôn của 2 vợ
                                                chồng chúng tôi
                                            </p>
                                        </div>
                                        <div className="flex flex-col font-weddingFont text-red-700 justify-center items-center text-4xl mt-4 gap-2">
                                            <p>Nguyễn Văn An</p>
                                            <p className="text-black text-4xl">
                                                &
                                            </p>
                                            <p>Nguyễn Thị Lan Anh </p>
                                        </div>
                                        <div className="flex mt-4 flex-col  gap-4">
                                            <p>
                                                Hôn lễ được tổ chức vào hồi 11
                                                giờ 00 phút
                                            </p>
                                            <div className="flex justify-center gap-6 font-weddingFont text-red-700 text-xl">
                                                <span className="border-double border-t-4 border-b-4 border-red-600 px-2 flex items-center">
                                                    Ngaøy
                                                </span>
                                                <Button
                                                    type="primary"
                                                    size={25}
                                                    className="bg-blue-600 size-12 text-3xl flex items-center justify-center"
                                                >
                                                    05
                                                </Button>
                                                <span className="border-double border-t-4 border-b-4 border-red-600 px-2 flex items-center">
                                                    Thaùng 08
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center flex-col gap-1">
                                                <p>(Tức ngày 05 / 08)</p>
                                                <p className="text-center">
                                                    Tại tư gia nhà trai
                                                    <br />
                                                    Quảng Yên - Quảng Ninh -
                                                    Việt Nam
                                                </p>
                                                <p> ====================== </p>
                                                <p className="text-center">
                                                    Sự hiện diện của quý vị
                                                    <br />
                                                    là niềm vinh dự lớn cho gia
                                                    đình Chúng tôi
                                                </p>
                                            </div>
                                            <div className="flex flex-row justify-between -mx-8 ">
                                                <div className="z-20">
                                                    <span className="flex justify-center font-weddingFont text-red-600 text-xl">
                                                        Nhaø Trai
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span>
                                                            Ông: Nguyễn Văn A
                                                        </span>
                                                        <span>
                                                            Bà: Phạm Thị C
                                                        </span>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className="z-20">
                                                    <span className="flex justify-center font-weddingFont text-red-600 text-xl">
                                                        Nhaø Gaùi
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span>
                                                            Ông: Nguyễn Văn A
                                                        </span>
                                                        <span>
                                                            Bà: Phạm Thị C
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                navigate("/Congrats")
                                            }
                                            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Gửi lời chúc
                                        </button>
                                        <button
                                            type="button"
                                            onClick={showModal}
                                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Xác nhận tham dự
                                        </button>
                                    </div>
                                    <Modal
                                        title="Xác nhân tham dự"
                                        open={isModalOpen}
                                        // onOk={handleOk}
                                        onCancel={handleCancel}
                                        footer={null}
                                    >
                                        <FormModal
                                            setIsModalOpen={setIsModalOpen}
                                        />
                                    </Modal>
                                    <img
                                        src="./right-top.png"
                                        alt="hoa"
                                        width="250px"
                                        className="absolute -top-6 -right-10 z-0"
                                    />
                                    <img
                                        src="./right-top.png"
                                        alt="hoa"
                                        width="250px"
                                        className="absolute -bottom-6 -left-10 z-10 rotate-180 z-0"
                                    />
                                </Col>
                            </Row>
                            {/* </div> */}
                            <footer>
                                <Row
                                    justify="center"
                                    align="middle"
                                    className="flex items-center justify-center h-full"
                                >
                                    <Col span={12} className="relative">
                                        <span>1</span>
                                        <div className="rotate-2 bg-white h-8 rounded-r-[25%] rounded-bl-md w-[calc(52%+15rem)] absolute -bottom-6 right-0 z-0"></div>
                                    </Col>
                                    <Col span={12} className="text-right">
                                        <span>2</span>
                                        <div className="-rotate-2 bg-white h-8 rounded-l-[25%] rounded-br-md w-[calc(52%+15rem)] absolute -bottom-6 left-0 z-0"></div>
                                    </Col>
                                </Row>
                            </footer>
                            <FloatButton
                                shape="circle"
                                type="primary"
                                style={{
                                    right: 24,
                                }}
                                icon={
                                    (!isPlaying && (
                                        <CustomerServiceOutlined />
                                    )) || <AudioMutedOutlined />
                                }
                                onClick={() => handlePlayPause()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
