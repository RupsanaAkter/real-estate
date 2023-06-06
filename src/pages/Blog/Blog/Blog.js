import React from 'react';
import Back from '../../Shared/Back/Back';
import img from '../../../assets/images/about (1).jpg'
import RecentCard from '../../Home/Recent/RecentCard';
import '../../Home/Recent/Recent.css'
const Blog = () => {
    return (
        <div>
             <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
        </div>
    );
};

export default Blog;