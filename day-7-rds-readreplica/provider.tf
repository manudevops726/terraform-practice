
  provider "aws" {
   alias  = "primary"
   region = "ap-south-1"
 }
 
 # Secondary region provider
 provider "aws" {
   alias  = "secondary"
   region = "us-east-1"
 }

