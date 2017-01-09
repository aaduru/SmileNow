{
  {
    session: {
      currentUser: {
        id: 1,
        username: 'breakfast'
      },
      errors: []
    }
  },
  clinic: {
    1: {
      name: "Tooth_friendly",
      clinic_imagic: "blah.jpg",
      description: "blah blah",
      rating: 3,
      reviews: 1,
      type_of_clinic: ["Pediatric Dentist", "Orthodontist"] //clinic type
    }
  },
  reviews: {
    1: {
      author_id: 1,
      author_image: "blah.jpg",
      ratings: 3,
      content: "perfect for kids"
    }
  },
  filters: {
    search: "tooth", // name of the clinic
    type_of_clinic: "Pediatric Dentist"
  }
}
