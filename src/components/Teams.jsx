import styles, { layout } from '../style'
import Footer from './Footer'
import Navbar from './Navbar'
import { teams, features } from '../constants'

const TeamCard = ({icon, name, position, expertise, contact, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {name} - {position}
        </h4>
        <ul className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          <li>Expertise: {expertise}</li>
          <li>Contact: {contact}</li>
        </ul>
      </div>
    </div>
)

export default function Teams() {
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
                    <section id='team' className={`${layout.section} `}>
                        <div className={`${layout.sectionInfo} px-4 py-12 md:py-20 text-center md:text-left`}>
                            <h2 className={`${styles.heading2} text-4xl md:text-5xl font-bold mb-6`}>Our Team</h2>
                            <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mx-auto md:mx-0`}>
                              At Hoobank, our team embodies expertise, dedication, and a shared passion for empowering your financial journey. Comprised of seasoned professionals across diverse fields, our team is committed to delivering exceptional service and personalized solutions. With a wealth of experience in banking, investment, insurance, and customer care, our experts are here to guide you through every step.
                            </p>
                            <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mt-6 mx-auto md:mx-0`}>
                              We prioritize your financial well-being, offering tailored advice and innovative strategies to help you achieve your goals. At Hoobank, our team's collective mission is to build lasting relationships with our clients, ensuring trust, reliability, and excellence in all our interactions.
                            </p>
                        </div>
                        <div className={`${layout.sectionImg} flex flex-col items-center md:items-start py-8 px-4 md:px-12`}>   
                            <div className="border-blue-200 border-2 text-white rounded-lg shadow-lg p-8">
                              {teams.map((team, index) => (
                                <TeamCard key={team.id} {...team} index={index}/>
                              ))}
                            </div>               
                            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
                            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
                            <div className='absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
                        </div>
                    </section>
                    <Footer/>
                </div>
            </div>
            
        </div>
        
    </>
  )
}
