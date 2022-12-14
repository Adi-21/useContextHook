// This component is written to demonstrate the useContext Hook.
import React, { createContext, useContext } from "react";

const blogInfo = {
    React: {
        post: "Learn useContext Hooks",
        author: "Adhithi Ravichandran"
    },
    GraphQL: {
        post: "Learn GraphQL Mutations",
        author: "Adhithi Ravichandran"
    }
};

const contentInfo = {
    Hooks: {
        concept: "Learn about basic react hooks ",
        teacher: "Shukla Shashank"
    },
    customHooks: {
        concept: "Learn custom hooks in react",
        teacher: "Shukla Shashank"
    }
};

const contentInfoContext = createContext(contentInfo);
const blogInfoContext = createContext(blogInfo);
const ParentComponent = () => {
    return (
        <contentInfoContext.Provider value={contentInfo}>
            <h2>Use Context Example Component</h2>
            <blogInfoContext.Provider value={blogInfo}>
                <BlogDetailComponent />
                <MyOtherBlogInfoComponent />
                <ContentInfoComponent />
                <MyContentInfoComponent />
            </blogInfoContext.Provider>
        </contentInfoContext.Provider>
    );
}

const BlogDetailComponent = () => {
    const blogDetails = useContext(blogInfoContext);

    return (
        <div>
            <h3>React Blog Details</h3>
            <p>Topic: {blogDetails.React.post}</p>
            <p>Author: {blogDetails.React.author}</p>
        </div>
    );
}

const MyOtherBlogInfoComponent = () => {
    const blogDetails = useContext(blogInfoContext);

    return (
        <div>
            <h3>GraphQL Blog Details</h3>
            <p>Topic: {blogDetails.GraphQL.post}</p>
            <p>Author: {blogDetails.GraphQL.author}</p>
        </div>
    );
}

const ContentInfoComponent = () => {
    const InfoDetails = useContext(contentInfoContext);

    return (
        <div>
            <h3>React hooks Details</h3>
            <p>Topic: {InfoDetails.Hooks.concept}</p>
            <p>Teacher: {InfoDetails.Hooks.teacher}</p>
        </div>
    );
}

const MyContentInfoComponent = () => {
    const InfoDetails = useContext(contentInfoContext);

    return (
        <div>
            <h3>React custom hooks Details</h3>
            <p>Topic: {InfoDetails.customHooks.concept}</p>
            <p>Teacher: {InfoDetails.customHooks.teacher}</p>
        </div>
    );
}

export default ParentComponent;
