function DiaryItem(props) {
    console.log(props);
    return (
        <tr>
            <td>{props.itemDate}</td>
            <td>{props.itemPoint}</td>
            <td>{props.itemTtl}</td>
            <td>
                <button>삭제</button>
            </td>
        </tr>
    );
}

export default DiaryItem;