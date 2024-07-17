# from django.urls import path
# from .views import users_list, users_detail

# urlpatterns = [
#     path('contact/', users_list.as_view() ),
#     path('contact/<int:pk>/', users_detail.as_view())
# ]

from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path(r'^api/users/viewall', views.users_list),
    re_path(r'^api/users/view/([0-9]+)$', views.users_detail),
    re_path(r'^api/users/create', views.add_user),
]