import { useSelector } from "react-redux";
import type { Users } from "../shared/models/User.model";

const View = () => {

    const userData: Users = useSelector((state: any) => state.User);

    return (
        <>
            <section className="flex flex-col justify-center items-center">
                <div className="w-[50%] flex flex-col gap-5 border border-blue-400 p-5 m-5">
                    <span>Name: {userData.name}</span>
                    <span>Email: {userData.email}</span>
                    <span>Phone: {userData.phone}</span>
                    <span>Website: {userData.website}</span>
                </div>
            </section>
        </>
    )
};

export default View;