import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const Stories = () => {
  return (
    <StoriesWrapper>
        <Story 
            image="https://res.cloudinary.com/dcwka06ph/image/upload/v1670681971/Website_project/z3949810954286_7ba89f8256157072ec162eedcd3782f2_ir9lxq.jpg"
            profileSrc="https://res.cloudinary.com/dcwka06ph/image/upload/v1671898959/1_squebg.jpg"
            title="Nguyễn Đức Toàn"
        />
        <Story 
            image="https://res.cloudinary.com/dcwka06ph/image/upload/v1670681971/Website_project/z3949810954286_7ba89f8256157072ec162eedcd3782f2_ir9lxq.jpg"
            profileSrc="https://res.cloudinary.com/dcwka06ph/image/upload/v1671898959/1_squebg.jpg"
            title="Nguyễn Đức Toàn"
        />
        <Story 
            image="https://res.cloudinary.com/dcwka06ph/image/upload/v1670681971/Website_project/z3949810954286_7ba89f8256157072ec162eedcd3782f2_ir9lxq.jpg"
            profileSrc="https://res.cloudinary.com/dcwka06ph/image/upload/v1671898959/1_squebg.jpg"
            title="Nguyễn Đức Toàn"
        />
    </StoriesWrapper>
  )
}

const StoriesWrapper = styled.div`
    display: flex;
`

export default Stories