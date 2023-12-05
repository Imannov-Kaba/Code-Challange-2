import styles, { layout } from '../style'
import Footer from './Footer'
import Navbar from './Navbar'
import { teamMembers, features} from '../constants'

const MemberCard = ({icon, name, position, experience, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {name}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {position} <br/> {experience}
        </p>
      </div>
    </div>
)

export default function AboutUs() {
  return (
    <>
        <div className='bg-primary w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <section id='about-us' className={`${layout.section} `}>
                        <div className={`${layout.sectionInfo} px-4 py-12 md:py-20 text-center md:text-left`}>
                            <h2 className={`${styles.heading2} text-4xl md:text-5xl font-bold mb-6`}>About HooBank</h2>
                            <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mx-auto md:mx-0`}>
                                Welcome to HooBank, where our mission is to revolutionize the banking experience. We aim to provide secure, accessible, and innovative financial solutions for individuals and businesses.
                            </p>
                            <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mt-6 mx-auto md:mx-0`}>
                                Our commitment to cutting-edge technology, customer satisfaction, and financial empowerment drives us to create seamless and personalized banking experiences.
                            </p>
                        </div>
                        <div className={`${layout.sectionImg} flex flex-col items-center md:items-start py-8 px-4 md:px-12`}>   
                            <div className="border-blue-200 border-2 text-white rounded-lg shadow-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-lg">
                                At HooBank, we envision a future where banking is intuitive, secure, and empowering for everyone. We strive to achieve this through innovation and customer-centric solutions.
                                </p>
                            </div>               
                            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
                            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
                            <div className='absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
                        </div>
                    </section>
                    <section id='about-us2' className={`${layout.section} mt-0 lg:-mt-60`}>
                        <div className={`${layout.sectionInfo} px-4 py-12 md:py-20 text-center md:text-left text-white`}>
                            <h3 className={`${styles.heading3} text-3xl md:text-4xl font-bold mt-10 md:mt-12 mb-4`}>Our Journey</h3>
                            <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mx-auto md:mx-0`}>
                                HooBank began with a vision - a vision to revolutionize traditional banking practices. Founded in 1998, our journey has been marked by significant milestones that have shaped our identity and propelled us forward. From our humble beginnings to an expanding intercontinental business, each step has been a testament to our dedication and growth.
                            </p>
                            {/* Team members' list can be included here */}
                            <h3 className={`${styles.heading3} text-3xl md:text-4xl font-bold mt-10 md:mt-12 mb-4`}>Embracing a Unique Culture</h3>
                            <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mx-auto md:mx-0`}>
                                At HooBank, our culture is the backbone of our identity. We foster an environment that thrives on collaboration, innovation, and integrity. Our values - Customer Centricity, Innovation, Integrity, Collaboration, and Community Engagement - guide every decision and action, creating a workplace where every voice is heard and respected.
                            </p>
                            <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mx-auto md:mx-0 mt-6`}>
                                Join us on this journey where our culture and values define who we are and how we serve our customers and communities.
                            </p>
                        </div>
                        <div className={`${layout.sectionImg} flex flex-col items-center md:items-start py-8 px-4 md:px-12 text-white`}>
                            {/* Include a different visual component or structure */}
                            <div className="rounded-lg shadow-lg p-8">
                                <h3 className={`${styles.heading3} text-3xl md:text-4xl font-bold mt-10 md:mt-12 mb-4`}>Meet Our Team</h3>
                                <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mx-auto md:mx-0`}>
                                    Our team at HooBank comprises passionate individuals dedicated to transforming banking experiences. Led by the founding fathers, our diverse team brings a wealth of experience and expertise. Explore the minds behind our success, each member contributing their unique skills and perspectives to drive innovation.
                                </p>
                                <div>
                                    {teamMembers.map((teamMember, index) => (
                                        <MemberCard key={teamMember.id} {...teamMember} index={index}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer/>
                </div>
            </div>
            
        </div>
        
    </>
  )
}
