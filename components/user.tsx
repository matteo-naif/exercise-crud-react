import { FC } from "react";
import { UserModel } from "../model/user.model";

type Props = {
    data: UserModel;
}

const User: FC<Props> = ({ data }) => {
    return <> { data.name }  </>
}

export default User;