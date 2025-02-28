/* class Book {
    constructor(id, title, author, publishedDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
    }

    static async create(connection, book) {
        const [result] = await connection.execute(
            'INSERT INTO books (title, author, publishedDate) VALUES (?, ?, ?)',
            [book.title, book.author, book.publishedDate]
        );
        return result.insertId;
    }

    static async findAll(connection) {
        const [rows] = await connection.execute('SELECT * FROM books');
        return rows.map(row => new Book(row.id, row.title, row.author, row.publishedDate));
    }

    static async findById(connection, id) {
        const [rows] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
        if (rows.length > 0) {
            const row = rows[0];
            return new Book(row.id, row.title, row.author, row.publishedDate);
        }
        return null;
    }

    static async delete(connection, id) {
        const [result] = await connection.execute('DELETE FROM books WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

export default new Book(); */

import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconfig.js';

export const Book = sequelize.define(
    'book',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publishedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        tableName: 'book',
        timestamps: false
    }
)