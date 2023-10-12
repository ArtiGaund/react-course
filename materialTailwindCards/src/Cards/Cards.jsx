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
        <Card className='max-w-[24rem] overflow-hidden'>
        <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className='m-0 rounded-none'
        >
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
           alt='ui/ux review check'/>
        </CardHeader>
        <CardBody>
            <Typography variant='h4' color='blue-gray'>
                UI/UX check
            </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
            <Typography className="font-normal">Upload time</Typography>
        </div>
        <Typography>Like & view icon</Typography>
      </CardFooter>
    </Card>
    {/* Login form  */}
        <Card className='w-96'>
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
        </Card>
    </>
    )
}