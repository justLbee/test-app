export default function () {
    return (
        {
            name : {
                value       : '',
                type        : 'text',
                placeholder : 'Имя',
                errorMessage: 'Поле не может быть пустым',
                valid       : false,
                touched     : false,
                validation  : {
                    required : true,
                    minLength: 1
                }
            },
            phone: {
                value       : '',
                type        : 'text',
                placeholder : 'Телефон',
                errorMessage: 'Введите корректный пароль',
                valid       : false,
                touched     : false,
                validation  : {
                    required: true,
                }
            },
            email: {
                value       : '',
                type        : 'email',
                placeholder : 'Email',
                errorMessage: 'Введите корректный email',
                valid       : false,
                touched     : false,
                validation  : {
                    required: true,
                    email   : true
                }
            }
        }
    )
}
