import React from "react";

const Bank = () => {
    return (
        <div className="w-full h-dvh bg-[#f2eded]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center h-lvh flex-col">
                    {/* Header */}
                    <div className="flex justify-center flex-col gap-4">
                        <img src="./wedding.gif" alt="wedding" width={350} />
                        <h2 className="text-6xl text-red-600 font-weddingFont">
                            Hoäp Möøng Cöôùi
                        </h2>
                    </div>
                    {/* Content Bank */}
                    <div className="flex flex-row gap-4 mt-4 relative">
                        <div className="w-[400px] bg-red-100 flex justify-center items-center flex-col border-4 border-[#c89d9c] rounded-md shadow-md gap-3 py-4">
                            <h3 className="font-semibold">
                                Mừng cưới đến Chú rể
                            </h3>
                            <img src="./mb.jpg" alt="flower" width={150} />
                            <p>
                                Ngân hàng:{" "}
                                <span className="font-semibold">MB</span>
                            </p>
                            <p>
                                Tên tài khoản:{" "}
                                <span className="font-semibold">
                                    Phạm Hồng Sơn
                                </span>
                            </p>
                            <p>
                                Số tài khoản:{" "}
                                <span className="font-semibold">
                                    0984508313
                                </span>
                            </p>
                        </div>
                        <div className="w-[400px] bg-blue-100 flex justify-center items-center flex-col border-4 border-[#c89d9c] rounded-md shadow-md gap-3">
                            <h3 className="font-semibold">
                                Mừng cưới đến Cô dâu
                            </h3>
                            <img src="./Cake.jpg" alt="flower" width={150} />
                            <p>
                                Ngân hàng:{" "}
                                <span className="font-semibold">Cake</span>
                            </p>
                            <p>
                                Tên tài khoản:{" "}
                                <span className="font-semibold">
                                    Phạm Hồng Sơn
                                </span>
                            </p>
                            <p>
                                Số tài khoản:{" "}
                                <span className="font-semibold">
                                    0984508313
                                </span>
                            </p>
                        </div>
                        <img
                            src="./chuRe.png"
                            alt="Chú Rể"
                            width={200}
                            className="absolute -left-48 bottom-0"
                        />
                        <img
                            src="codau1.png"
                            alt="Cô dâu"
                            width={250}
                            className="absolute -right-64 bottom-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bank;
