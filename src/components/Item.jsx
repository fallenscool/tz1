import React, {PureComponent} from 'react';

export class Item extends PureComponent {
    render() {
        const {data} = this.props;
        return (
            <div style={{border: "1px solid black", flex: "0 0 24%"}}>
                {data.thumbnail && <img src={data.thumbnail} alt=""/>}
                <p>{data.title}</p>
                <p>Number of comments: {data.num_comments}</p>
                <a
                    href={`https://www.reddit.com/${data.permalink}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    Link
                </a>
            </div>
        );
    }
}