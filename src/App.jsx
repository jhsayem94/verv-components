import './App.css'
import circle from './assets/check-circle.png';
import logo from './assets/Verv-Logo.png';
import rightMove from './assets/right-move.png';
import zoopla from './assets/zoopla.png';
function App() {
    const AddtionalServices = [
        {
            id: 1,
            title: 'Tenant Referencing',
            price: 19.99            
        },
        {
            id: 2,
            title: 'Rent Collection',
            price: 39.99            
        },
        {
            id: 3,
            title: 'Gas Safety Certificate (CP12)',
            price: 54.99            
        },
        {
            id: 4,
            title: 'Energy Performance Certificate (EPC)',
            price: 85.99            
        },
        {
            id: 9,
            title: 'Electrical Safety Certificate (EICR)',
            price: 75.99            
        },
        {
            id: 5,
            title: 'Inventory & Check-In/Out',
            price: 95.99            
        },
        {
            id: 6,
            title: 'Pro Photos',
            price: 25.99            
        },
        {
            id: 7,
            title: 'Floor Plans',
            price: 9.99            
        },
        {
            id: 8,
            title: 'Accompanied Viewings Service',
            price: 29.99            
        }
        
    ]
    return (
        <>
            <div className='my-12'>
                {/* Premier Listings */}
                <div className=" lg:w-[1216px] md:w-3/5 w-5/6 mx-auto  bg-[#faf4ff] rounded-3xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-[#eef1f3]  lg:flex lg:justify-end lg:items-center lg:gap-[96px]">
                    <div className='flex justify-center md:justify-start pl-8 lg:pl-0'>
                        <div className="  self-stretch flex-col justify-center items-center gap-6 inline-flex py-6">
                            <div className="flex-col lg:justify-start items-center gap-6 inline-flex">
                                <div className="h-[59px] flex-col justify-start items-center gap-2 ">
                                    <h2 className="text-center text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Premier Listings</h2>
                                    <p className="text-[#30455f] text-lg font-semibold font-['Inter']">For Landlords & Agents</p>
                                </div>
                                <div className="justify-center items-baseline gap-2 inline-flex">
                                    <h1 className="text-center text-[#30455f] text-5xl font-bold font-['Inter'] leading-[57.60px]">£54.99</h1>
                                    <span className="text-[#30455f] text-lg font-medium font-['Inter']">Inc. VAT</span>
                                </div>
                            </div>
                            <div className="self-stretch h-[98px] flex-col justify-start items-center gap-2 flex">
                                <p className="text-center text-[#30455f] text-sm font-semibold font-['Inter'] leading-[21px]">Looking for more exposure? List with<br />Zoopla & Rightmove!</p>
                                <button className="w-[200px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex">
                                    <span className="text-white text-lg font-semibold font-['Inter']">Add Listing Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-end items-start lg:flex">
                        <div className="pl-8 lg:pr-[143px] pt-6 lg:h-full pb-6 bg-white border-r border-[#30455f]/10 justify-start items-center ">
                            <div className="self-stretch flex-col justify-start items-start gap-4 ">
                                <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">3 Months Adverting on:</h3>
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <div className="justify-center items-center gap-2 inline-flex">
                                        <div  className="relative">
                                            <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                        </div>
                                        <img className="w-[61px] h-6" src={logo} />
                                    </div>
                                    <div className="justify-center items-center gap-2 inline-flex">
                                        <div  className="relative">
                                            <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                        </div>
                                        <img className="w-[132px] h-[24px]" src={zoopla} />
                                    </div>
                                    <div className="justify-center items-center gap-2 inline-flex">
                                        <div  className="relative">
                                            <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                        </div>
                                        <img className="w-[117px] h-[24px]" src={rightMove} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" h-[318px] px-8 lg:pr-[143px] py-6 lg:h-full bg-white flex-col justify-start items-start rounded-r-3xl">
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">What’s included:</h3>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Listings on multiple platforms</p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Message prospective tenants</p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Arrange viewings</p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Active listings for 3 months</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="h-[33px] py-2 px-6 bg-white rounded-[32px] border border-[#50b533] flex-col justify-center items-center gap-1 flex">
                                    <span className="text-[#50b533] text-sm font-semibold font-['Inter']">Show more</span>
                                </button>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
            <div className='my-12'>
                 {/* Rent Ready */}
                 <div className=" lg:w-[1216px] md:w-3/5 w-5/6 mx-auto  bg-[#eef8eb] rounded-3xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-[#eef1f3]  lg:flex lg:justify-end lg:items-center lg:gap-[96px]">
                    <div className='flex justify-center md:justify-start pl-8 lg:pl-0'>
                        <div className="  self-stretch flex-col justify-center items-center gap-6 inline-flex py-6">
                            <div className="flex-col lg:justify-start items-center gap-6 inline-flex">
                                <div className="h-[59px] flex-col justify-start items-center gap-2 ">
                                    <h2 className="text-center text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Rent Ready</h2>
                                    <p className="text-[#30455f] text-lg font-semibold font-['Inter']">For Landlords & Agents</p>
                                </div>
                                <div className="justify-center items-baseline gap-2 inline-flex">
                                    <h1 className="text-center text-[#30455f] text-5xl font-bold font-['Inter'] leading-[57.60px]">£54.99</h1>
                                    <span className="text-[#30455f] text-lg font-medium font-['Inter']">Inc. VAT</span>
                                </div>
                            </div>
                            <div className="self-stretch h-[98px] flex-col justify-start items-center gap-2 flex">
                                <p className="text-center text-[#30455f] text-sm font-semibold font-['Inter'] leading-[21px]">Looking for more exposure? List with<br />Zoopla & Rightmove!</p>
                                <button className="w-[200px] h-12 p-2 bg-[#50b533] rounded-lg justify-center items-center gap-2 inline-flex">
                                    <span className="text-white text-lg font-semibold font-['Inter']">Add Listing Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-end items-start lg:flex ">
                        <div className="pl-8 lg:pr-[143px] pt-6 lg:h-full pb-6 bg-white border-r border-[#30455f]/10 justify-start items-center ">
                            <div className="self-stretch flex-col justify-start items-start gap-4 ">
                                <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">3 Months Adverting on:</h3>
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <div className="justify-center items-center gap-2 inline-flex">
                                        <div  className="relative">
                                            <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                        </div>
                                        <img className="w-[61px] h-6" src={logo} />
                                    </div>
                                    <div className="justify-center items-center gap-2 inline-flex">
                                        <div  className="relative">
                                            <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                        </div>
                                        <img className="w-[132px] h-[24px]" src={zoopla} />
                                    </div>
                                    <div className="justify-center items-center gap-2 inline-flex">
                                        <div  className="relative">
                                            <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                        </div>
                                        <img className="w-[117px] h-[24px]" src={rightMove} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" h-[318px] px-8 lg:pr-[143px] py-6 lg:h-full bg-white flex-col justify-start items-start rounded-r-3xl">
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">What’s included:</h3>
                                <div className="flex-col justify-start items-start gap-2 flex">
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Listings on multiple platforms</p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Message prospective tenants</p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Arrange viewings</p>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                        <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                            <div  className="relative">
                                                <img src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Active listings for 3 months</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="h-[33px] py-2 px-6 bg-white rounded-[32px] border border-[#50b533] flex-col justify-center items-center gap-1 flex">
                                    <span className="text-[#50b533] text-sm font-semibold font-['Inter']">Show more</span>
                                </button>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
            <h2 className="text-center text-[#30455f] text-[32px] font-semibold font-['Inter'] leading-[38.40px] my-12">Additional Services</h2>
            <div className='my-12'>
                 {/* Rent Ready */}
                 <div className='grid lg:grid-cols-3 lg:gap-6 gap-y-4  lg:w-[1216px] md:w-3/5 lg-px-0 px-4 mx-auto'  >
                 {
                    AddtionalServices.map(service => <div key={service.id} className='border border-[#EEF1F3] rounded-lg min-w-[370px]'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">{service.title}</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >{service.price}</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="min-w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div>)
                 }
                    
                    {/* <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Rent Collection</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Gas Safety Certificate (CP12)</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Energy Performance Certificate (EPC)</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Electrical Safety Certificate (EICR)</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Inventory & Check-In/Out</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Pro Photos</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Floor Plans</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='border border-[#EEF1F3] rounded-lg'>
                        <div className='p-5'>
                            <div className='flex justify-between pb-5'>
                                <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">Accompanied Viewings Service</h3>
                                <div className=''>
                                    <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                    <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >£19.99</h6>
                                </div>
                                
                            </div>
                            <div className='flex justify-between items-end' >
                            <a href='#' className="w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                <div className='pb-2'>
                                    <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                </div>
                            </div>
                        </div>
                    </div>  */}
                 </div>
            </div>
        </>
    
    )
}

export default App
