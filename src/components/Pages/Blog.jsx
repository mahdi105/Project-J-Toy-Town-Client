import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10 py-8'>
            <div className='py-4'>
                <h2 className='py-1 text-[47px]' style={{ fontFamily: 'baloo paaji' }}>My Blogs</h2>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Answer to the questions below</h2>
                <div>
                    <ul className='list-decimal ml-5'>
                        <li>
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?</li>
                        <li>What is MongoDB aggregate and how does it work (google it)?</li>
                        <li>Compare SQL and NoSQL databases?</li>
                        <li>What is express js? What is Nest JS (google it)?</li>
                    </ul>
                </div>
                <article>
                    <h2 className='text-xl font-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='mb-2'>Access token and Refresh token these terms are used in user Authorization. Basically, A system provided by JWT(JSON Web Token). We used it in the server side by installing JWT for Node.js. It's confirgured with user authentication.</p>
                    <p><strong>Access Token and Refresh Token: </strong></p>
                    <p>When a user is logging or registering on the website, the server will provide 2 token to the client as a response of user login or sign up. Before that JWT have to be installed and configured that way. Actually server send Access Token and Refresh Token to client as response. Having the token from client side, we will store these token to the client or browser using "HTTP Only Coockie" Or "Localhost". After storing the Access token, it will be used to authorize the authenticated user for accessing mostly the sensetive or paid content of any website. Access token has limited validity like our passport, It requires to renew the access token validity. When the validty ends, refresh token will be sent to server for having a new access token. This way access token will be validated.</p>
                </article>
                <article>
                    <h2 className='text-xl font-bold'>2. What is MongoDB aggregate and how does it work?</h2>
                    <p><strong>MongoDB Aggregation</strong> is framework. This powerful tool is use for data analysis and processing in the MongoDB database. It helps us to perform complex operations on data. Grouping, Filtering, Sorting, and Transforming are used to generate aggregated results.</p>
                    <p>It works on document's collection in pipeline base approach. This pipeline approach contains multiple stages, some of these are</p>
                    <ul>
                        <li>$match</li>
                        <li>$group</li>
                        <li>$project</li>
                        <li>$sort</li>
                        <li>$limit</li>
                        <li>$skip</li>
                        <li>$unwind</li>
                    </ul>
                </article>
                <article>
                    <h2 className='text-xl font-bold'>3. SQL Vs NoSQL Database</h2>
                    <p><strong>SQL</strong></p>
                    <ul className='list-decimal ml-4 mb-2'>
                        <li>SQL databases use a relational data model, where data is organized into tables with predefined schemas. </li>
                        <li>SQL (Structured Query Language) is a standardized language used to define, manipulate, and retrieve data from relational databases. It provides a set of commands and syntax for creating tables, inserting, updating, and deleting data, as well as performing complex queries, joins, aggregations, and sorting.</li>
                        <li>SQL databases provide ACID (Atomicity, Consistency, Isolation, Durability) properties to ensure reliable and consistent transactions. ACID transactions guarantee that all changes within a transaction are atomic, consistent, isolated </li>
                        <li> SQL databases support complex joins, which allow data to be combined from multiple tables based on related keys. Joins enable powerful querying and analysis by linking data across tables and extracting meaningful information through relationships.</li>
                        <li>It provides structured and Tabular Data, Data is organized into well-defined tables with fixed columns and data types.They are suitable for applications with complex relationships, reporting, and analytics that rely on structured data.</li>
                        <li> SQL databases have huge ecosystem. The have a huge number of tools, libraries and frameworks and large community of developers.</li>
                    </ul>
                    <p><strong>NoSQL</strong></p>
                    <ul className='list-decimal ml-4 mb-2'>
                        <li>The NoSQL database works based on key-value pair, document, columnar and graph concept. It provides flexibility in storing data  and manipulating them, they may be unstructured or semi-structured data. Each model is used in different cases.</li>
                        <li>NoSQL databases often have their own query languages or APIs specific to their data model. For example:
                            Key-value stores allow basic operations like get, put, and delete based on a unique key.</li>
                        <li> NoSQL databases offer schema flexibility, allowing dynamic and evolving schemas. They do not enforce schemas like SQL databases, enabling easy addition, modification, or deletion of fields within documents or entities. </li>
                        <li>NoSQL databases are designed to scale horizontally by distributing data across multiple servers or clusters. </li>
                        <li>NoSQL databases are well-suited for scenarios involving large-scale data, high write/read throughput, flexible data models, and rapid application development. They are commonly used in real-time analytics, content caching, social networks, IoT, mobile applications, and applications dealing with unstructured or semi-structured data.</li>
                        <li>The NoSQL landscape consists of various database systems, each optimized for specific use cases and data models. Popular NoSQL databases include MongoDB (document store), Cassandra (columnar), Redis (key-value), Neo4j (graph), and Amazon DynamoDB. Each database has its own strengths, features, and community support</li>
                    </ul>
                </article>
                <article>
                    <h2 className='text-xl font-bold mb-2'>4. What is express js? What is Nest JS ?</h2>

                    <p className='mb-2'>
                    <strong>Express.js</strong> is a popular, minimalist web application framework for Node.js. Using it, we can build web applications and APIs quickly and easily. It gives a lightweight and flexible features that we can use them easily, Simplifies the creation of server side application using JavaScript.</p>
                    <p className='mb-2'>
                        <strong> Nest.js</strong>
                        It's a framework for creating efficient server-side applications using TypeScript. It is built on top of Express.js, which provides several advantages in terms of code maintaining, organizing and increase developer productivity.
                    </p>

                </article>
            </div>
        </section>
    );
};

export default Blog;