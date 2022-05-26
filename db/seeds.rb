
5.times do
  
  User.create(
    email: Faker::Internet.safe_email,
    full_name: Faker::Name.name,
    password:'Abc123$',
    password_confirmation: 'Abc123$'
  )
end