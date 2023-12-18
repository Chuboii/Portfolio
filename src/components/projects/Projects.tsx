import ProjectCards from "../project cards/ProjectCards";
import Tabs from "../tabs/Tabs";
import {Container, H2, SubText} from './Projects.style'

export default function Projects() {
    
    return (
        <>
            <Container id="projects">
                <H2>Projects</H2>
                <SubText>
                As an accomplished developer, I have successfully executed projects showcasing expertise in JavaScript, React, Node.js, and MongoDB. My portfolio reflects a commitment to delivering innovative and scalable solutions, underpinned by a strategic approach to project management and a proven ability to navigate the complexities of both front-end and back-end development.    
                </SubText>
                    <Tabs />
                <ProjectCards/>
            </Container>
        </>
    )
}