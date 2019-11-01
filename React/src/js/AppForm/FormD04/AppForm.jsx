import React from 'react'

// 常數
const APP_FORM_TITLE = 'FormD04'

const dataList = [
    { line: 'A', date: '1/1', field1: 'a', field2: 'a2' },
    { line: 'B', date: '1/1', field1: 'b', field2: 'b2' },
    { line: 'C', date: '1/1', field1: 'c', field2: 'c2' },
    { line: 'A', date: '1/2', field1: 'a', field2: 'a2' },
    { line: 'B', date: '1/2', field1: 'b', field2: 'b2' },
    //{ line:'C', date:'1/2', field1:'c', field2:'c2' },
    //{ line:'A', date:'1/3', field1:'a', field2:'a2' },
    { line: 'B', date: '1/3', field1: 'b', field2: 'b2' },
    { line: 'C', date: '1/3', field1: 'c', field2: 'c2' },
]

const pivot = {}
const lineKeys = []
const dateKeys = []

dataList.forEach(item => {
    const { line, date } = item

    if (lineKeys.findIndex(c => c == line) < 0)
        lineKeys.push(line)

    if (dateKeys.findIndex(c => c == date) < 0)
        dateKeys.push(date)

    if (!(pivot[line])) pivot[line] = {}

    pivot[line][date] = {
        field1: item.field1,
        field2: item.field2
    };
})


export default function AppForm() {
    let k = 1;
    return (
        <div>
            <h2>{APP_FORM_TITLE}</h2>
            {/*
            <p>{JSON.stringify(lineKeys)}</p>
            <p>{JSON.stringify(dateKeys)}</p>
            {Object.keys(pivot).map(line =>
                Object.keys(pivot[line]).map(date =>
                    <p key={k++}>pivot[{line}][{date}] → {JSON.stringify(pivot[line][date])}</p>
                )
            )}
            */}

            <table style={{ border: '3px #cccccc solid' }} border={'1'}>
                <thead>
                    <tr>
                        <th></th>
                        {dateKeys.map((date, j) =>
                            <th key={j}>{date}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {lineKeys.map((line, i) =>
                        <tr key={i}>
                            <td>{line}</td>
                            {dateKeys.map((date, j) =>
                                <td key={j}>
                                    {JSON.stringify(pivot[line][date])}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}