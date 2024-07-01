const Contacts = () => {
    return (
        <div className="border-[1px] px-[100px] pt-[20px] mt-[15px] min-h-[600px]">
            <h1 
                className="text-center text-[20px] font-bold">{"Контактная информация"}
            </h1>

        
            <div className="text-[18px] mt-[15px] mx-auto flex gap-[60px] pb-[90px]">

                <div className="flex flex-col gap-[20px]">
                    <h2 className="font-bold">Юридический адрес и адрес офиса компании:</h2>
                    <p className="text-start w-[500px]">
                        Общество с ограниченной ответственностью &quot;ШНОС&quot;
                        Кыргызская республика, г. Бишкек
                        720040, ул. Исанова 1/5
                    </p>
                    <ul>
                        <li>тел: +996 (312) 303 303</li> 
                        <li>факс: +996 (312) 303 360</li>
                    </ul>

                    
                    <h2 className="font-bold"> По вопросам касающихся конкурсных торгов и государственных закупок: </h2>
                    <ul>
                        <li>тел: +996 (312) 303 303, (доб. 138)</li>
                        <li>тел: +996 (556) 706 146</li>
                        <li>тел: +996 (700) 706 146</li>
                        <li>эл.адрес: tender@bpetroleum.kg</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-[20px]">
                    <h2 className="font-bold">Отдел кадров</h2>
                    <ul>
                        <li>тел: +996 312 303 303, (доб. 131);</li>
                        <li>эл.адрес: hr@bpetroleum.kg</li>
                    </ul>

                    <h2 className="font-bold">Отдел маркетинга и рекламы</h2>
                    <ul>
                        <li>тел: +996 312 303 303, (доб. 124);</li>
                        <li>эл.адрес: marketing@bpetroleum.kg</li>
                    </ul>

                    <h2 className="font-bold">Номер горячей линии:</h2>
                    <ul>
                        <li>тел: +996 (557) 29 49 49 (номер круглосуточный)</li>
                    </ul>
                </div>

            </div>



    
    </div>

    )

}

export default Contacts;