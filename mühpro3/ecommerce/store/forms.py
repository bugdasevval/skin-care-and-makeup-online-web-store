from django import forms

class LoginForm(forms.Form):
    email = forms.EmailField(label='E-posta')
    password = forms.CharField(label='Şifre', widget=forms.PasswordInput)

