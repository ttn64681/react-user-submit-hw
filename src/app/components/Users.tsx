import User from './User';

interface UsersProps {
    users: {
        id: number;
        name: string;
        username: string;
        imageUrl: string;
        email: string;
        password: string;
    }[]; // array of user objects
}

const Users = ({ users }: UsersProps) => {
    return (
        <>
            {users.map((user) => {
                return (
                    <User user={user} key={user.id} />
                );
            })}
        </>
    );
}

export default Users;