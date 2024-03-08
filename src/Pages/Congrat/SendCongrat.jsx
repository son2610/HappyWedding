import { useEffect, useState } from "react";
import { Input, Table } from "antd";
const { TextArea } = Input;

const columns = [
    {
        title: "Tên",
        dataIndex: "name",
        width: 50,
    },
    {
        title: "Lời Chúc",
        dataIndex: "congrat",
        width: 150,
    },
];

// const data = [];
// for (let i = 0; i < 100; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         congrat:
//             "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, accusamus, deserunt magni voluptatibus molestias quo praesentium culpa tempore vel sed ab dicta cum laudantium vero doloremque molestiae quae alias modi. Modi, ad illum aspernatur, fugit iusto enim, fugiat aliquid doloribus id quod possimus officia reprehenderit tempore nemo veniam quidem. Modi pariatur in corrupti perferendis explicabo similique doloribus repudiandae harum expedita.",
//     });
// }

const SendCongrat = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(
            "https://script.google.com/macros/s/AKfycbw6x__4_YtoYqQBDFq3vmsKd1wJp2HEbChQkahdLAlYxJP4B9RGwFMwgmb32YffeiLb/exec"
        ) // Replace with your actual endpoint URL
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
        console.log(data);
    }, []);
    const [value, setValue] = useState("");
    return (
        <>
            <div className="w-full h-dvh bg-[#f2eded]">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center h-lvh flex-col">
                        {/* Header */}
                        <div className="flex justify-center items-center flex-col gap-4">
                            <img
                                src="./congrat.gif"
                                alt="Congrat"
                                width={200}
                            />
                            <h2 className="text-8xl text-red-600 font-weddingFont">
                                Soå löu buùt
                            </h2>
                            <p className="font-poppins">
                                Cảm ơn bạn rất nhiều vì đã gửi những lời chúc
                                mừng tốt đẹp nhất đến đám cưới của chúng tôi!
                            </p>
                        </div>
                        {/* Content Bank */}
                        <div className="flex flex-row gap-4 mt-4 relative">
                            <div className="p-8 border-4 border-double border-[#c89d9c] w-[400px] h-[300px] flex flex-col gap-6 flex items-center justify-center">
                                <Input placeholder="Nhập tên của bạn" />

                                <TextArea
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Nhập lời chúc của bạn ở đây nhé ❤"
                                    autoSize={{ minRows: 3, maxRows: 8 }}
                                />

                                <button
                                    type="button"
                                    // onClick={() =>
                                    //     navigate("/Congrats")
                                    // }
                                    className=" w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                    Gửi lời chúc
                                </button>
                            </div>
                            <div className=" border-4 border-double border-[#c89d9c] max-w-[600px] h-[300px] overflow-hidden">
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    size="small"
                                    pagination={{
                                        pageSize: 50,
                                    }}
                                    scroll={{
                                        y: 240,
                                    }}
                                />
                            </div>
                            {/* <img
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
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SendCongrat;
