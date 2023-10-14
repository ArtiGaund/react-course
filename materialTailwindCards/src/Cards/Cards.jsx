import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Input,
    Checkbox,
    Button,
    } from '@material-tailwind/react'
    

export default function Cards(){
    return (
        <>
        {/* <Card className="mt-6 w-96 overflow-hidden rounded h-full"> */}
            {/* <div style={{ margin: '10px'}}> */}
                {/* <CardHeader
                color="blue-gray" className="relative h-56 pt-100"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                    
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                   
                   />
                   
                </CardHeader> */}
                {/* </div> */}
                {/* <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className="flex items-center">
                        <div className='w-full md:w-2/3'>
                            <Button>Read More</Button>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <Typography className="font-normal">Upload time</Typography>
                        </div>
                     </div> */}
                     {/* <Typography> */}
                        {/* <HeartIcon className='h-[18px] w-[18px]'/> */}
                     {/* </Typography> */}
               {/* </CardFooter> */}
            {/* </Card> */}
    {/* Login form  */}
        {/* <Card className='w-96'>
            <CardHeader
            variant='gradient'
            color='gray'
            className='mb-4 grid h-28 place-items-center'
            >   
                <Typography variant='h3' color='white'>Sign In</Typography>
            </CardHeader>
            <CardBody className='flex flex-col gap-4'>
                <Input label='email' size='lg'/>
                <Input label='password' size='lg'/>
                <div className='-ml-2.5'>
                    <Checkbox label="Remember me"/>
                </div>
            </CardBody>
            <CardFooter className='pt-0'>
                <Button variant='gradient' fullWidth>Sign In</Button>
                <Typography variant='small' className='mt-6 flex justify-center'>
                    Don&apos;t have a account?
                    <Typography
                    as="a"
                    href='#'
                    variant='small'
                    color='blue-gray'
                    className='ml-1 font-bold'
                    >
                        Sign Up
                    </Typography>
                </Typography>
            </CardFooter>
        </Card> */}
        <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Tania Andrew
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </CardBody>
    </Card>
    </>
    )
}