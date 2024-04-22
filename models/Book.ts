import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { User } from "./User";
export interface BookAttributes {
  id: number;
  title: string;
  isbn: string; //International Standard Book Number
  pages: number;
  language: string;
  edition: number;
  authorId: number;
  publusherId: number;
  publishedYear: number;
  category: string;
  description: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface BookInput extends Optional<BookAttributes, "id"> {}

export class Book
  extends Model<BookAttributes, BookInput>
  implements BookAttributes
{
  public id!: number;
  public title!: string;
  public isbn!: string;
  public pages!: number;
  public language!: string;
  public edition!: number;
  public authorId!: number;
  public publusherId!: number;
  public publishedYear!: number;
  public category!: string;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edition: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publusherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
  }
);

// User.hasMany(Post);
// Post.belongsTo(User, { foreignKey: "userId" });
