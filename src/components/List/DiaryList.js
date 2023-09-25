import SearchBox from './SearchBox';
import DiaryItem from './DiaryItem';
import diaryData from '../../diaryData.json';

function DiaryList() {
    

    return (
        <div>
            <SearchBox/>
            <a href="">등록</a>
            <table>
                <thead>
                    <tr>
                        <th>작성일자</th>
                        <th>별점</th>
                        <th>제목</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {diaryData.map((item) => <DiaryItem key={item.diaryId} itemDate = {item.date} itemTtl = {item.title} itemPoint = {item.point}/>)}
                </tbody>
                </table>
        </div>
    );
}

export default DiaryList;