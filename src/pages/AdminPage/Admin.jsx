import logo from '../../assets/employee2.jpg'
import {Button} from "@nextui-org/react";


const Admin =() => {
  return (
    <div className = "border-[1px] px-[100px] pt-[20px] mt-[15px] min-h-[600px]">
        <div className="flex items-center gap-[60px] text-[25px] mt-[50px] font-bold">
            <div className='w-[150px]'>
                <img
                    src = {logo}
                    alt = "adminPhoto"
                    />
            </div>
            <p>Атай Мамасадыков</p>
        </div>

        <div className='mt-[100px] flex gap-[40px] '>
            <Button color="primary" size='md'>
                Добавить новость
            </Button>

            <Button color="primary">
                Добавить сотрудника
            </Button>
            
        </div>


        

    </div>
  )
}

export default Admin