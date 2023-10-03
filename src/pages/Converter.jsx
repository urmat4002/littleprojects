import {useEffect, useState} from 'react'
import {Container, Form} from 'react-bootstrap'

export const Converter = () => {
  const [valutes, setValutes] = useState({})
  const [valute1, setValute1] = useState()
  const [valute2, setValute2] = useState()
  const [valuteValue1, setValuteValue1] = useState(1)
  const [valuteValue2, setValuteValue2] = useState(1)
  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((data) => data.json())
      .then((data) => {
        const arr = Object.entries(data.Valute)
        setValutes(arr)
        setValute1(arr[0][1].Value)
        setValute2(arr[0][1].Value)
        console.log(arr)
      })
  }, [])

  const changeValuteValue1 = (value) => {
    setValuteValue1(value)
    setValuteValue2((value * valute1) / valute2)
  }

  const changeValuteValue2 = (value) => {
    setValuteValue2(value)
    setValuteValue1((value * valute2) / valute1)
  }

  const changeValute1 = (value) => {
    setValute1(value)
    setValuteValue2((value * valuteValue1) / valute2)
  }

  const changeValute2 = (value) => {
    setValute2(value)
    setValuteValue1((value * valuteValue2) / valute1)
  }

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <div style={{width: '300px', margin: '10px'}}>
          <Form.Select
            style={{margin: '10px'}}
            onChange={(e) => changeValute1(e.target.value)}
          >
            {valutes.length &&
              valutes.map((item, index) => (
                <option value={item[1].Value} key={index}>
                  {item[1].Name + '    ' + item[0]}
                </option>
              ))}
          </Form.Select>
          <Form.Control
            style={{margin: '10px'}}
            type="number"
            value={valuteValue1}
            onChange={(e) => changeValuteValue1(e.target.value)}
          />
        </div>
        <div style={{width: '300px', margin: '10px'}}>
          <Form.Select
            style={{margin: '10px'}}
            onChange={(e) => changeValute2(e.target.value)}
          >
            {valutes.length &&
              valutes.map((item, index) => (
                <option value={item[1].Value} key={index}>
                  {item[1].Name + '    ' + item[0]}
                </option>
              ))}
          </Form.Select>
          <Form.Control
            style={{margin: '10px'}}
            type="number"
            value={valuteValue2}
            onChange={(e) => changeValuteValue2(e.target.value)}
          />
        </div>
      </div>
    </Container>
  )
}
