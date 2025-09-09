'use client'
import { User, USER_SEX, USER_TYPE } from "@/app/api/server/types/user";
import { get } from "@/utils/http";
import { createContext, useContext, useEffect, useState } from "react";

const loginUser: User = {
    id: '',
    name: '',
    username: '',
    nickname: '',
    sex: USER_SEX.unknown,
    headImg: '',
    tokenExpired: 0,
    deviceId: '',
    userType: USER_TYPE.TYPE_C,
    status: 0,
    accountType: 0,
    enabled: false,
    userFrom: 1,
    needToReview: false,
    socketOnline: false,
    createTime: ""
}

const UserProvider = createContext<{
    user: User;
    refreshUser: () => Promise<void>;
}>({
    user: loginUser,
    refreshUser: async () => {},
});

export const useLoginUserContext = () => {
    return useContext(UserProvider);
}

export const useLoginUserType = (): USER_TYPE => {
    const { user } = useLoginUserContext();
    return user.userType;
}

export default function LoginUserProvider({ children }: Readonly<{children: React.ReactNode}>) {
    const [user, setUser] = useState<User>(loginUser);
    
    const refreshUser = async () => {
        try {
            const res = await get<User>('/api/user');
            if (res.success) {
                const userInfo = res.data;
                if (userInfo) {
                    setUser({
                        ...userInfo,
                    });
                }
            } else {
                // 如果获取用户信息失败，重置为初始状态
                setUser({...loginUser});
            }
        } catch (error) {
            console.error('Failed to fetch user info:', error);
            setUser({...loginUser});
        }
    };

    useEffect(() => {
        // 初始化时获取用户信息
        refreshUser();
        // 可以添加事件监听，当登录状态变化时刷新用户信息
        // 例如：window.addEventListener('user-change', refreshUser);
        // return () => window.removeEventListener('user-change', refreshUser);
    }, []);

    return (
        <UserProvider.Provider value={{ user, refreshUser }}>
            {children}
        </UserProvider.Provider>
    );
}