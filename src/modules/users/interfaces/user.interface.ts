import { CreateUserDto } from "../dto/create-user.dto";

export interface IUserService {
    createUser(data: CreateUserDto): Promise<{ data: string }>;
    getAllUsers(): Promise<any[]>;
    getUserById(id: string): Promise<any>;
    deleteUser(id: string): Promise<void>;
}