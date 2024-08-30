import { DataTypes,Model,Optional } from "sequelize";
import connection from "../../config/dbConnect"

interface PostsAttributes {
  id?: number,
  userId?: number,
  title?: string,
  body?: string | null,
  createdAt?: Date,
  updatedAt?: Date
}

export interface PostsInput extends Optional<PostsAttributes,'id'>{}
export interface PostsOutput extends Required<PostsAttributes>{}

class Posts extends Model<PostsAttributes,PostsInput> implements PostsAttributes{
  public id!: number;
  public userId!: number;
  public title!: string;
  public body!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Posts.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: true,
        type: DataTypes.STRING
      },
      body: {
        allowNull: true,
        type: DataTypes.STRING
      },
},{
  timestamps:true,
  sequelize: connection,
  underscored:false
})

export default Posts;