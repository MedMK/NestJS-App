import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/user.dto';
import { User, UserDocument } from 'src/models/user.models';
import { faker } from '@faker-js/faker';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  Add(body: UserDto) {
    return this.userModel.create(body);
  }  
    findall() {
    return this.userModel.find();
    }
    findone(id : string) {
    return this.userModel.findById(id);
    }
    delete(id: string) {
    return this.userModel.remove({ _id: id });
    }
  update(id: string, body: UserDto) {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    )}
    search(key: string) {
    const keyword = key
      ? {
          $or: [
            { fullname: { $regex: key, $options: 'i' } },
            { email: { $regex: key, $options: 'i' } },
          ],
      }: {};
    return this.userModel.find(keyword);
    }
    Faker() {
     for (let i = 0; i < 30; i++) {
      const fakeUser = {
        fullname: faker.name.fullName(),
        email: faker.internet.email(),
        age: 30,
        country: faker.address.country(),
      };
      this.userModel.create(fakeUser);
    }
    return 'sucess';
  }

}
