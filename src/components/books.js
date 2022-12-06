import React from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { BookItem } from './bookItem';

export class Books extends React.Component {
    render() {
        return this.props.books.map(
            (book) => {
                return <BookItem book={book} key={book._id} reloadData={this.props.reloadData}  ></BookItem>
            }
        );
    }
}