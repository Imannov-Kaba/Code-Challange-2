import styles, { layout } from '../style'
import Footer from './Footer'
import Navbar from './Navbar'
import { products, features } from '../constants'

const ProductCard = ({icon, title, description, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {description}
        </p>
      </div>
    </div>
)

export default function Product() {
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
                    <section id='product' className={`${layout.section} `}>
                        <div className={`${layout.sectionInfo} px-4 py-12 md:py-20 text-center md:text-left`}>
                            <div className="border-blue-200 border-2 text-white rounded-lg shadow-lg p-8">
                                {products.map((product, index) => (
                                  <ProductCard key={product.id} {...product} index={index}/>
                                ))}
                            </div>
                        </div>
                        <div className={`${layout.sectionImg} flex flex-col items-center md:items-start py-8 px-4 md:px-12`}>   
                          <h2 className={`${styles.heading2} text-4xl md:text-5xl font-bold mb-6`}>Our Products and Services</h2>
                          <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mx-auto md:mx-0`}>
                            Discover a world of tailored financial solutions at Hoobank, where our commitment revolves around meeting your diverse needs. Explore our range of accounts, offering flexibility and rewards, while our competitive loans, credit cards with personalized benefits, and investment options aim to fulfill your aspirations. Safeguard what matters most with our insurance plans and experience convenience through our intuitive online and mobile banking services.
                          </p>
                          <p className={`${styles.paragraph} text-lg md:text-xl max-w-[600px] mt-6 mx-auto md:mx-0`}>
                            Our financial advisory team stands ready to guide you, complemented by 24/7 customer support and educational resources to empower your decisions. Join us in our commitment to community initiatives, making Hoobank your trusted partner in every financial endeavor.
                          </p>             
                          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
                          <div className='absolute z-[1] w-[60%] h-[60%] rounded-full bottom-40 white__gradient'/>
                          <div className='absolute z-[2] w-[40%] h-[40%] right-20 bottom-20 blue__gradient'/>
                        </div>
                    </section>
                    <Footer/>
                </div>
            </div>
            
        </div>
        
    </>
  )
}
