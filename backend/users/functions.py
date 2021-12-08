
def get_token(request):
    data = request.META['HTTP_AUTHORIZATION'][len('Bearer '):]
    return data