import React from 'react'
import styled from 'styled-components'

const TextBox = styled.h1`
    text-align:center;
    color:#69302C;
`
const Pic = styled.img`
    max-width: 250px;
    user-select: none;
`
const Button = styled.button`
    font-size: 1em;
    padding: 0.25em 0em;
    border-radius: 5px;
    color: #69302C;
    border: 2px solid #69302C;
    margin:auto;
    padding : 0.5em;
    margin-top:0.2em;
    background-color: Transparent;
    font-family: "Kanit";
    
    
`
const Box = styled.div`
    margin : 1em;
    width:10em;
    height:13em;
    display:inline-table;
    text-align:center;
    align-items:center;

`

const LargeBox = styled.div`
    align-content:center;
    text-align:center;
    margin-top:3em;
`
const BodyCSS = styled.div`
    text-align:center;
    margin: 2em 6.5em;
    color:#69302C;
`
const Topic = (props) => (
    <TextBox>{props.name}</TextBox>
)

const Section1 = (props) => (
    <Box>
    <Pic src = 'img/BB.jpg'/>
    <Button onclick="{props.name}">{props.name}</Button>
    </Box>
)

const Topic2 = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>#HelloWorld #Beaver #HelloBeaver #Hello{props.name}</p>
    </div>
)

const Text = styled.div`
    margin-top:3em;
`
const BodyText = () => (
    <Text>โปรเจ็กต์อาร์ติสต์ โซลาร์บูติกมอยส์เจอไรเซอร์อันเดอร์จุ๊ย แรลลี่เห่ยซิ่งไฮเอนด์ ออสซี่พูลหลวงพี่ โปรเจ็กต์เทคโนแครต เวิร์กช็อปเหี่ยวย่น โมเดลเซ็นทรัลว้าวเห่ยโซน ควิกเทอร์โบ วีเจอินดอร์ฮัลโลวีนไง ตุ๊ดไหร่รีไซเคิลกู๋ โปรเห่ยสมิติเวช ยนตรกรรมกรีนเหมยสะกอม วีไอพีบูมกาญจน์ มิลค์ ป๊อปช็อคซีเรียสมินต์หลวงปู่ ฟิวเจอร์บร็อกโคลีพุดดิ้งโอเปอเรเตอร์
    โปลิศอัตลักษณ์คาร์โก้แชมพู ไฮเวย์เคลื่อนย้ายบลอนด์ รูบิก ซาดิสต์โต๋เต๋ออกแบบคาร์โก้กีวี แมมโบ้มั้ยบึ้ม หน่อมแน้มแฮปปี้ไลฟ์ แอร์ ติงต๊องคาร์โก้สโตนคอร์รัปชั่นแคร็กเกอร์ ลิมูซีนดยุก หมายปองวอล์ค ซูเปอร์กุมภาพันธ์ไฮแจ็คกับดัก กับดักล็อต พาร์มัฟฟิน รุมบ้า วานิลาฮ็อตด็อก เช็กดีเจคูลเลอร์
    เจี๊ยวเอ๋แม่ค้าว้อดก้า เดโมบราฮิบรู แพตเทิร์นพรีเมียร์ปิกอัพฮันนีมูน สหรัฐอยุติธรรมฮ็อต เพียวบร็อคโคลี รีพอร์ทวัจนะรองรับหมายปอง ผลักดันอาร์ติสต์ราสเบอร์รีบ็อกซ์ ดีพาร์ตเมนท์แทงโก้กีวี วิลล์ แฟรี่ อุปนายกไลท์เทคโนเพนตากอนเดี้ยง คอร์รัปชั่น คอร์รัปชันวิลเลจ กราวนด์ ฮ่องเต้สกรัมอิมพีเรียลไวอากร้า มัฟฟินคอนแท็คจิ๊กจูน
    ดีพาร์ตเมนท์อุด้ง คลาสสิก มิวสิค แมคเคอเรลโดมิโน คอลัมนิสต์ กู๋แครอทถูกต้องช็อปเปอร์บ๊อบ เซ็นเตอร์ฮ็อตเซรามิก ผลักดัน มาเฟียไฮเทคคอนโทรล พุทโธเดโมคอปเตอร์พุทโธ เห่ยแฟรี่ ซีดาน พุทธภูมิไฮเอนด์โฟล์คโอเวอร์ มาร์เก็ตธัมโม นินจา น้องใหม่ลิมูซีนซิมจีดีพีกัมมันตะ
    แคนูวัคค์สารขัณฑ์พาสตา โพสต์เพลย์บอยทอมเซอร์ไพรส์เคลื่อนย้าย อุตสาหการคอร์รัปชั่นฮัลโหลท็อปบู๊ท เช็งเม้ง อันเดอร์ไหร่แอ๊บแบ๊วหงวน นอมินีสกายทอร์นาโดสหรัฐ สเตย์เดอะโอเปร่า อัตลักษณ์เดอะโบตั๋น เลดี้ เพียวเพนกวินเทเลกราฟตังค์ วิดีโอนอร์ทแบนเนอร์ดีกรีพ่อค้า โปลิศ โจ๋ วานิลา﻿กรรมาชน โปรเจกเตอร์โปรเจ็คเดบิต สุริยยาตรฟลุทผิดพลาดแทกติคคอร์ป
    </Text>
)

const SelectionSection = () => (
    <LargeBox>
        <Section1 name = "#ฟ้อนเอ็นด์"/>
        <Section1 name = "#ดรีซายน์" />
        <Section1 name = "#เกรมส์" />
        <Section1 name = "#อินทร์ฟร๊" />
    </LargeBox>
)
const Topics = () => (
    <BodyCSS>
        <Topic name = "เฮนโหล่วบีเบอร์"/>
        <SelectionSection />
        <BodyText />
    </BodyCSS>

)

export default Topics