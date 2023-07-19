
const useInpuValidation = (setPhone,setPhoneHelper,setEmail,setEmailHelper) => {
    const onChange= event =>{
        let valid
        switch (event.target.id) {
            case 'phone':
                setPhone(event.target.value)
                valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

                if(valid){
                    setPhoneHelper('')
                }else {
                    setPhoneHelper('Invalid phone number')
                } 

                break
                
            case 'email':
                setEmail(event.target.value)
                valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if(valid){
                    setEmailHelper('')
                }else {
                    setEmailHelper('Invalid Email')
                }

                break

            default:
                break

        }
    }
    return [onChange]
}
export default useInpuValidation