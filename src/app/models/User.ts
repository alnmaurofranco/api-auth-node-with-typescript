import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import bcrypt from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hasPassword() {
    this.password = bcrypt.hashSync(this.password, 12);
  }
}

export default User;
